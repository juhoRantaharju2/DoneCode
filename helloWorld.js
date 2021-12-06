const languageCode = String(process.argv[2]);

if (languageCode == "en"){

    console.log("Hello world!");

} else if (languageCode == "fi"){

    console.log("Päivää maailma!");

}else if (languageCode == "ch"){

    console.log("你好，世界");

}else{

    console.log("Hello worldy!");

}