# OS-THM JS
      Depcrapted see: https://github.com/ThatCakeID/os-thm-js/issues/3
Current version: 0.2-alpha

os-thm (stands for: opensource-theme) is a piece of software that can manage, edit, import, export or remove theme. One of the os-thm's key feature is that the theme can be applied globally, means the theme can used by apps that have implemented os-thm. os-thm is intended to be open-source, rich, and easy to use.

## How to use?

> ℹ You can use example folder for basic ui and preview!

1. import os-thm-js.js with:

      Minimal version is coming soon stay tuned! Join to the **[Discord server](https://thatcakeid.com/discord)**. 

      - use the stable version with:

       <script src="https://os-thm.thatcakeid.com/releases/latest/os-thm-js.js"></script>
    
      - use the beta version with: 
    
       <script src="https://raw.githubusercontent.com/ThatCakeID/os-thm-js/dev/os-thm-js.js"></script>
       
      - use stable or beta version (local) with:    
      
       <script src="./os-thm-js.js"></script>
       
      You need to download the js file from http://os-thm.thatcakeid.com
       
2. initialize os-thm with:

            InitializeTheme();

3. get and select themes with:

        getThemes().then((data) => {
            selectTheme(ThemeId);
        });
    
4. apply colors to elements:

        setTextColor('button');
        setBackgroundColor('button'); 
        setBarLightColor('barlight');
        setBarDarkColor('bardark');
        setCardColor('card');
    
### That it! ✅


    
