---
title: Install Ubuntu on Lenovo IdeaPad 720s (settings)
date: "2020-03-20T23:46:37.121Z"
---

Hi there!, on this post I come to tell you what are the configs to be able to install Ubuntu in a notebook Levono IdeaPad 720s. I have the same as the photo above, except for the fingerprint reader :(, because in Argentina it doesn’t bring it (MMLPQTP).

Well, when I wanted to install Ubuntu over Windows, I had some problems whit the SSD configs and in blogs I found rare solutions that did not work for me.

I will try to be brief and concise without explaining in depth the terms that are named, and in this case, I use Ubuntu distro, but you can use the one you like best.

## Let’s start!

### Dowloads

As a first step, we will download Ubuntu from its official website:
> [https://www.ubuntu.com/download/desktop](https://www.ubuntu.com/download/desktop)

when the download is finished, we should build a bootable USB. For this I used Rufus (for windows)
> [https://rufus.akeo.ie/?locale](https://rufus.akeo.ie/?locale)

### Making a bootable USB

You must connect the pen drive and execute Rufus.

![Screenshot rufus](https://cdn-images-1.medium.com/max/2000/1*DYSPRx1QD_vHyxwcRe-xDA.png)*Screenshot rufus*

Once you have the same config, select the downloaded ISO by clicking on the highlighted figure whit light blue and make click on “Start” (“Empezar”).

![Warnings](https://cdn-images-1.medium.com/max/2000/1*ZnMdLc9Je1BG-aj2YyEOtQ.png)*Warnings*

They’re going to skip some warnings about formatting data, click “ok” to everything and wait to it finish. We have ready the bootable USB with Ubuntu (or other).

### Preparing partitions

in windows we must free space, this post (in Spanish) explains it better and with images, in the section “Preparando particiones”.
> [https://www.muycomputer.com/2017/10/24/windows-10-y-ubuntu-17/](https://www.muycomputer.com/2017/10/24/windows-10-y-ubuntu-17/)

### Configuring the BIOS

Now we have to restart the PC and before it turns on we press “F2” to enter the BIOS. Once here, we have to start from our pendrive, for this I show you the following image.

![BIOS image of my pc](https://cdn-images-1.medium.com/max/8320/1*OJ-pm4iJ7c_0s5Ku0znfRg.jpeg)*BIOS image of my pc*

“Linupus lite (hp v125w)” is my pendrive, we must move it as the first boot device, through “F6” we can do it. In the Security option make sure you have the same config as the following image.

![Security options in BIOS](https://cdn-images-1.medium.com/max/8320/1*mRhpo6jzn3Y00V54pcfsRg.jpeg)*Security options in BIOS*

Finally, we must configure the storage protocol of our SDD. Windows uses RAID, so for Ubuntu we must use AHCI. Then change the option “Sata controller mode” and select AHCI.

![](https://cdn-images-1.medium.com/max/8320/1*RT1bLJA4snHN7lxrJCuo7g.jpeg)

We are ready to install Ubuntu (or another Linux OS). Restart the pc with the pendrive connected and we should see the installation menu of Ubuntu. The installation is very easy and intuitive so I will not develop that part, in the previous link in section “Instalando Ubuntu” you can see in more detail the installation if you have any questions. I leave the link again
> [https://www.muycomputer.com/2017/10/24/windows-10-y-ubuntu-17/](https://www.muycomputer.com/2017/10/24/windows-10-y-ubuntu-17/)

That’s it, Yay!, now you can have a dual boot with Ubuntu and Windows.

***Important!*: If you want to use Windows, you must change the value of “Sata Driver Mode” to RAID again, and when you go back to Linux, change it to AHCI**

It’s my first post, so any criticism / feedback you have leave it in the comments please! Thanks for reading.
