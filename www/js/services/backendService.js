app.service("backendService", function() {
    var tama = this;
    tama.sheetData = [];
    tama.setSheetData = function() {
        getSheet("1qYMtwTz2mdxyySbvzNxh2nRpnvnUjKlgoXEhuPnb8_E", function(data) {
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].length; j++) {
                    tama.sheetData.push({
                        url: data[i][j]
                    });
                }
            }
        });
    };

    tama.getSheetData = function() {
        return tama.sheetData;
    };
});