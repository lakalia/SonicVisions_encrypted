import MuseScore 3.0

MuseScore {
    menuPath: "Plugins.pluginName"
    description: "Description goes here"
    version: "1.0"
    onRun: {
        console.log("Hello World!");
        Qt.quit();
    }
}
