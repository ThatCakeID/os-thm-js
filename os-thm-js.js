const version = "0.2-alpha";
var initialized = false;

function InitializeTheme() {
    if (typeof Storage !== "undefined") {
        console.log("os-thm-js " + version + ": Initialized! :)");
        initialized = true;
        return true;
    } else {
        alert(
            "os-thm-js " + version + ": Sorry your browser not supported! :("
        );
        initialized = false;
        return false;
    }
}

function User(username, uid) {
    this.username = username;
    this.uid = uid;
}

// function ThemeData( colorPrimary, colorPrimaryDark, colorBackgroundText, colorBackground,
//                     colorButton, shadow, colorHint, colorRipple, colorPrimaryCardImage,
//                     version, colorPrimaryText, colorPrimaryImage, colorBackgroundImage,
//                     colorBackgroundCardText, statusbarIcon, colorBackgroundCard, colorButtonText,
//                     colorPrimaryCardText, colorPrimaryCard, colorBackgroundCardImage) {
//     this.colorPrimary = colorPrimary;
//     this.colorPrimaryDark = colorPrimaryDark;
//     this.colorBackgroundText = colorBackgroundText;
//     this.colorBackground = colorBackground;
//     this.colorButton = colorButton;
//     this.shadow = shadow;
//     this.colorHint = colorHint;
//     this.colorRipple = colorRipple;
//     this.colorPrimaryCardImage = colorPrimaryCardImage;
//     this.version = version;
//     this.colorPrimaryText = colorPrimaryText;
//     this.colorPrimaryImage = colorPrimaryImage;
//     this.colorBackgroundImage = colorBackgroundImage;
//     this.colorBackgroundCardText = colorBackgroundCardText;
//     this.statusbarIcon = statusbarIcon;
//     this.colorBackgroundCard = colorBackgroundCard;
//     this.colorButtonText = colorButtonText;
//     this.colorPrimaryCardText = colorPrimaryCardText;
//     this.colorPrimaryCard = colorPrimaryCard;
//     this.colorBackgroundCardImage = colorBackgroundCardImage;
// }
// "[{\"colorPrimary\":\"#FFFFFF\",
// \"colorPrimaryDark\":\"#FFFFFF\",
// \"colorBackgroundText\":\"#000000\",
// \"colorBackground\":\"#FFFFFF\",
// \"colorButton\":\"#2196F3\",
// \"shadow\":\"1\",
// \"colorHint\":\"#2196F3\",
// \"colorRipple\":\"#2196F3\",
// \"colorPrimaryCardImage\":\"#000000\",
// \"version\":\"2\",
// \"colorPrimaryText\":\"#000000\",
// \"colorPrimaryImage\":\"#000000\",
// \"colorBackgroundImage\":\"#2196F3\",
// \"colorBackgroundCardText\":\"#000000\",
// \"statusbarIcon\":\"0\",
// \"colorBackgroundCard\":\"#FFFFFF\",
// \"colorButtonText\":\"#FFFFFF\",
// \"colorPrimaryCardText\":\"#000000\",
// \"colorPrimaryCard\":\"#FFFFFF\",
// \"colorBackgroundCardImage\":\"#000000\"}]"

function Theme(author, title, info, user_uid, theme_data, osthm_version) {
    this.author = new User(author, user_uid);
    this.title = title;
    this.info = info;
    this.osthm_version = osthm_version;
    this.theme_data = theme_data;
}

var CrossData;

function toColor(num) {
    num >>>= 0;
    var b = num & 0xff,
        g = (num & 0xff00) >>> 8,
        r = (num & 0xff0000) >>> 16,
        a = ((num & 0xff000000) >>> 24) / 255;
    return "rgba(" + [r, g, b, a].join(",") + ")";
}

async function getThemes() {
    if (!initialized) {
        return console.log(
            "os-thm-js " + version + ": os-thm not initialized :("
        );
    }
    return await fetch("https://thatcakeid.com/api/os-thm/v1/get_themes.php", {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            var themes = [];
            for (key in data.data) {
                console.log(JSON.parse(localStorage.getItem("theme")));
                let current_data = data.data[0];
                let theme_data = JSON.parse(current_data["themesjson"]);
                themes.push(
                    new Theme(
                        current_data["themesauthor"],
                        current_data["themesname"],
                        current_data["themesinfo"],
                        current_data["uid"],
                        theme_data,
                        current_data["os-thm-version"]
                    )
                );
            }
            CrossData = themes;
            return themes;
        });
}

function selectTheme(id) {
    if (!initialized) {
        return console.log(
            "os-thm-js " + version + ": os-thm not initialized :("
        );
    }
    try {
        localStorage.setItem("theme", JSON.stringify(CrossData[id]));
    } catch (error) {
        alert(error);
        return error;
    }
    alert("Succesfully");
}

function setTextColor(ElementId) {
    if (!initialized) {
        return console.log(
            "os-thm-js " + version + ": os-thm not initialized :("
        );
    }
    document.getElementById(ElementId).style.color = toColor(
        JSON.parse(localStorage.getItem("theme")).theme_data.colorBackgroundText
    );
}

function setBackgroundColor(ElementId) {
    if (!initialized) {
        return console.log(
            "os-thm-js " + version + ": os-thm not initialized :("
        );
    }
    document.getElementById(ElementId).style.background = toColor(
        JSON.parse(localStorage.getItem("theme")).theme_data.colorBackground
    );
}

function setBarLightColor(ElementId) {
    if (!initialized) {
        return console.log(
            "os-thm-js " + version + ": os-thm not initialized :("
        );
    }
    document.getElementById(ElementId).style.background = toColor(
        JSON.parse(localStorage.getItem("theme")).theme_data.colorPrimary
    );
}

function setBarDarkColor(ElementId) {
    if (!initialized) {
        return console.log(
            "os-thm-js " + version + ": os-thm not initialized :("
        );
    }
    document.getElementById(ElementId).style.background = toColor(
        JSON.parse(localStorage.getItem("theme")).theme_data.colorPrimaryDark
    );
}

function setCardColor(ElementId) {
    if (!initialized) {
        return console.log(
            "os-thm-js " + version + ": os-thm not initialized :("
        );
    }
    document.getElementById(ElementId).style.background = toColor(
        JSON.parse(localStorage.getItem("theme")).theme_data
            .colorPrimaryCardTint
    );
}

function CreateTheme(barlight, bardark, card, btnback, text) {}
