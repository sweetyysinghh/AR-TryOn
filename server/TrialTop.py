import cv2
import imutils
import numpy as np
import random
import requests
import sys
import os

def load_image_from_url(url):
    response = requests.get(url)
    img_array = np.asarray(bytearray(response.content), dtype=np.uint8)
    img = cv2.imdecode(img_array, cv2.IMREAD_COLOR)
    return img

def fashion(image_url):
    video = cv2.VideoCapture(0)
    thres = [130, 40, 75, 130]
    size = 100
    th = thres[0]
    
    # Ensure output directory exists
    if not os.path.exists('output'):
        os.makedirs('output')
    
    while True:
        top = load_image_from_url(image_url)  
        (ret, frame_to_try) = video.read()
        frame_to_try = cv2.flip(frame_to_try, 1, 0)
        resized = imutils.resize(frame_to_try, width=800)
        gray = cv2.cvtColor(resized, cv2.COLOR_BGR2GRAY)
        circles = cv2.HoughCircles(gray, cv2.HOUGH_GRADIENT, 1.2, 100)
        
        if circles is not None:
            circles = np.round(circles[0, :]).astype("int")
            largest_circle = max(circles, key=lambda c: c[2])
            (x, y, r) = largest_circle
            if r > 30:
                cv2.circle(frame_to_try, (x, y), r, (0, 255, 0), 4)
                cv2.rectangle(frame_to_try, (x - 5, y - 5), (x + 5, y + 5), (0, 128, 255), -1)
                size = r * 7
        size = min(max(size, 100), 350)
        top_resized = imutils.resize(top, width=size)

        f_height = frame_to_try.shape[0]
        f_width = frame_to_try.shape[1]
        t_height = top_resized.shape[0]
        t_width = top_resized.shape[1]
        height = int(f_height / 2 - t_height / 2)
        width = int(f_width / 2 - t_width / 2)
        rows, cols, channels = top_resized.shape
        topGray = cv2.cvtColor(top_resized, cv2.COLOR_BGR2GRAY)
        ret, mask = cv2.threshold(topGray, th, 255, cv2.THRESH_BINARY_INV)
        inverted_mask = cv2.bitwise_not(mask)
        roi = frame_to_try[height:height + t_height, width:width + t_width]
        image_background = cv2.bitwise_and(roi, roi, mask=inverted_mask)
        image_foreground = cv2.bitwise_and(top_resized, top_resized, mask=mask)
        top_result = cv2.add(image_background, image_foreground)
        frame_to_try[height:height + t_height, width:width + t_width] = top_result
        font = cv2.FONT_HERSHEY_SIMPLEX
        x = 10
        y = 20
        cv2.putText(frame_to_try, "Press 'c' to capture, 'q' to quit", (x, y), font, .5, (255, 255, 255), 1)
        cv2.namedWindow("Let us try on some tops!", cv2.WINDOW_NORMAL)
        cv2.resizeWindow("Let us try on some tops!", int(frame_to_try.shape[1] * 1.4), int(frame_to_try.shape[0] * 1.4))
        cv2.imshow('Let us try on some tops!', frame_to_try)
        key = cv2.waitKey(10)
        if key & 0xFF == ord('c'):
            rand = random.randint(1, 999999)
            cv2.imwrite('output/' + str(rand) + '.png', frame_to_try)
        elif key & 0xFF == ord('q'):
            break

    video.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    image_url = sys.argv[1] 
    fashion(image_url)
