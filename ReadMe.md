## Multi-use repository
I am using this repository as a storage place for a variety of tutorials that I am following as I try to learn Electron. 

I got sick of making a new repository for each, since they were all only used briefly and then kept around for reference, but not changed often.

In this repository, I will try to make a new branch for every tutorial that I follow so each will have a clean code base that applies only to that tutorial.

## TutorialsPoint: Electron Tutorial
Started: 2022-11-20
Start URL: https://www.tutorialspoint.com/electron

Overall, this has been a very good tutorial. I feel like I understand what I'm working with more, but that could just be because this is the second tutorial I've followed.

There are still many cases where this tutorial is importing modules into renderer directly, which I thought was a no-no, but I guess it's just done for simplicity. Or maybe it's not as dangerous as I thought...maybe it's just that you shouldn't `require('electron')`, but you can `require('other-modules')`.

