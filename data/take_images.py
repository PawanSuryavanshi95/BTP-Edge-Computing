import cv2
import os

video = cv2.VideoCapture(0)

face_detect = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

count = 0

name_id = str(input("Enter your name: ")).lower()

path = 'images/'+ name_id

os.makedirs(path)

while True:
    ret, frame = video.read()
    faces = face_detect.detectMultiScale(frame, 1.3, 5)
    for x,y,w,h in faces:
        count = count + 1
        name = './images/' + name_id + '/' + str(count) + '.jpg'
        print("Creating ... " + name)
        cv2.imwrite(name, frame[y:y+h, x:x+w])
        cv2.rectangle(frame, (x,y), (x+w, y+h), (0,255,0), 3)
    cv2.imshow("WindowFrame", frame)
    cv2.waitKey(1)
    if count > 500 : 
        break

video.release()

cv2.destroyAllWindows()

