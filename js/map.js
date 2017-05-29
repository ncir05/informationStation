//http://dev.virtualearth.net/REST/V1/Imagery/Map/Road/29.533185,-98.585747/13?mapSize=500,400&pp=29.533185,-98.585747;22&mapLayer=TrafficFlow&key=AmX3Ylc-BPxKKXK2nv7qqsJc19J3kFFYBF3Rv0sLRkNPmCvCGES-WsV2uOLtFDmD
//BingMapKey - AmX3Ylc-BPxKKXK2nv7qqsJc19J3kFFYBF3Rv0sLRkNPmCvCGES-WsV2uOLtFDmD
var url = 'http://dev.virtualearth.net/REST/V1/Imagery/Map/Road/'+ myLat() +',' + myLong() + '/13?mapSize=500,400&pp='+ myLat() +',' + myLong() + ';22&mapLayer=TrafficFlow&key=' + mapAPIKey();
var url2 = 'http://dev.virtualearth.net/REST/v1/Traffic/Incidents/37,-105,45,-94?key=' + mapAPIKey();
