"""
    获取取百度热搜词：
        1.使用selenium爬取
"""

from selenium import webdriver
import time

def spider_hot_words():
    """

    :return: hot_words: list
    """
    hot_words = []
    # 使用无头浏览器
    option = webdriver.ChromeOptions()
    option.add_argument('--headless')   # 隐藏浏览器

    driver = webdriver.Chrome(
        executable_path='../driver/chromedriver.exe',
        options=option
    )

    try:

        driver.get('https://voice.baidu.com/act/virussearch/virussearch?from=osari_map&tab=0&infomore=1')
        time.sleep(2)
        driver.find_element_by_xpath('//*[@id="ptab-0"]/div/div[1]/section/div').click()

        # 定位热搜词
        hot = driver.find_elements_by_xpath('//*[@id="ptab-0"]/div/div[1]/section/a/div/span[2]')
        for i in hot:
            print(i.text)
            hot_words.append(i.text)

    except Exception:
        print('爬取失败！')
    else:
        print('爬取完成！')

    driver.quit()
    return hot_words


if __name__ == '__main__':
    spider_hot_words()