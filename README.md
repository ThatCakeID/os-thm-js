# OS-THM JS
Current version: 0.1-alpha

os-thm (stands for: opensource-theme) is a piece of software that can manage, edit, import, export or remove theme. One of the os-thm's key feature is that the theme can be applied globally, means the theme can used by apps that have implemented os-thm. os-thm is intended to be open-source, rich, and easy to use.

## How to use?

> ℹ You can use example folder for basic ui and preview!

1. import os-thm-js.js with:

      - use the stable version with:

       <script src="https://os-thm.thatcakeid.com/releases/latest/os-thm-js.js"></script>
    
      - use the beta version with: 
    
       <script src="https://raw.githubusercontent.com/ThatCakeID/os-thm-js/dev/os-thm-js.js"></script>
       
      - use stable or beta version (local) with:
        * You need to download the js file from http://os-thm.thatcakeid.com

       <script src="./os-thm-js.js"></script>

2. then get and select themes with:

        getThemes().then((data) => {
            selectTheme(ThemeId);
        });
    
3. apply colors to elements:

        setTextColor('button');
        setBackgroundColor('button'); 
        setBarLightColor('barlight');
        setBarDarkColor('bardark');
        setCardColor('card');
    
### That it! ✅


    
