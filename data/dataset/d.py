import urllib.request

def save_video(video_url,num):
    try:
        print(video_url)
        savename = str(num)+'.mp4'
        print(savename)
        urllib.request.urlretrieve(video_url,savename)
        print("저장완료")
    except:
        print('저장오류')

def openurl(txt):
    try:
        vFile = open(txt, encoding='UTF-8')
        print('------파일 열기 완료')
        vlinenumber = 1
        for line in vFile:
            video_url = line
            save_video(video_url,vlinenumber)
            vlinenumber +=1
        vFile.close()
    except:
        print('파일 존재안함')


openurl('text1.txt')
