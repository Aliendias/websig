var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_heatmap_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "heatmap",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/heatmap_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6577302.880237, -4022796.131414, -5452976.023225, -2919443.807713]
                            })
                        });
var format_ocorenciasdeinundaoechuvaforteem2023_2 = new ol.format.GeoJSON();
var features_ocorenciasdeinundaoechuvaforteem2023_2 = format_ocorenciasdeinundaoechuvaforteem2023_2.readFeatures(json_ocorenciasdeinundaoechuvaforteem2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ocorenciasdeinundaoechuvaforteem2023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ocorenciasdeinundaoechuvaforteem2023_2.addFeatures(features_ocorenciasdeinundaoechuvaforteem2023_2);
var lyr_ocorenciasdeinundaoechuvaforteem2023_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ocorenciasdeinundaoechuvaforteem2023_2, 
                style: style_ocorenciasdeinundaoechuvaforteem2023_2,
                popuplayertitle: "ocorencias de inundação e chuva forte em 2023",
                interactive: true,
    title: 'ocorencias de inundação e chuva forte em 2023<br />\
    <img src="styles/legend/ocorenciasdeinundaoechuvaforteem2023_2_0.png" /> 0 - 1<br />\
    <img src="styles/legend/ocorenciasdeinundaoechuvaforteem2023_2_1.png" /> 1 - 2<br />\
    <img src="styles/legend/ocorenciasdeinundaoechuvaforteem2023_2_2.png" /> 2 - 3<br />\
    <img src="styles/legend/ocorenciasdeinundaoechuvaforteem2023_2_3.png" /> 3 - 4<br />\
    <img src="styles/legend/ocorenciasdeinundaoechuvaforteem2023_2_4.png" /> 4 - 5<br />\
    <img src="styles/legend/ocorenciasdeinundaoechuvaforteem2023_2_5.png" /> 5 - 6<br />'
        });
var format_rios_3 = new ol.format.GeoJSON();
var features_rios_3 = format_rios_3.readFeatures(json_rios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rios_3.addFeatures(features_rios_3);
var lyr_rios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rios_3, 
                style: style_rios_3,
                popuplayertitle: "rios",
                interactive: true,
                title: '<img src="styles/legend/rios_3.png" /> rios'
            });
var format_Centrodedefesacivil_4 = new ol.format.GeoJSON();
var features_Centrodedefesacivil_4 = format_Centrodedefesacivil_4.readFeatures(json_Centrodedefesacivil_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centrodedefesacivil_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centrodedefesacivil_4.addFeatures(features_Centrodedefesacivil_4);cluster_Centrodedefesacivil_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Centrodedefesacivil_4
});
var lyr_Centrodedefesacivil_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Centrodedefesacivil_4, 
                style: style_Centrodedefesacivil_4,
                popuplayertitle: "Centro de defesa civil",
                interactive: true,
                title: '<img src="styles/legend/Centrodedefesacivil_4.png" /> Centro de defesa civil'
            });

lyr_OSMStandard_0.setVisible(true);lyr_heatmap_1.setVisible(true);lyr_ocorenciasdeinundaoechuvaforteem2023_2.setVisible(true);lyr_rios_3.setVisible(true);lyr_Centrodedefesacivil_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_heatmap_1,lyr_ocorenciasdeinundaoechuvaforteem2023_2,lyr_rios_3,lyr_Centrodedefesacivil_4];
lyr_ocorenciasdeinundaoechuvaforteem2023_2.set('fieldAliases', {'id': 'id', 'cd_geocodm': 'cd_geocodm', 'nm_municip': 'nm_municip', 'pop': 'pop', 'renda': 'renda', 'domicilios': 'domicilios', 'area': 'area', '2023': '2023', });
lyr_rios_3.set('fieldAliases', {'id': 'id', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'width': 'width', });
lyr_Centrodedefesacivil_4.set('fieldAliases', {'id': 'id', 'localizaca': 'localizaca', });
lyr_ocorenciasdeinundaoechuvaforteem2023_2.set('fieldImages', {'id': 'TextEdit', 'cd_geocodm': 'TextEdit', 'nm_municip': 'TextEdit', 'pop': 'TextEdit', 'renda': 'TextEdit', 'domicilios': 'TextEdit', 'area': 'TextEdit', '2023': 'TextEdit', });
lyr_rios_3.set('fieldImages', {'id': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'width': 'TextEdit', });
lyr_Centrodedefesacivil_4.set('fieldImages', {'id': '', 'localizaca': '', });
lyr_ocorenciasdeinundaoechuvaforteem2023_2.set('fieldLabels', {'id': 'hidden field', 'cd_geocodm': 'hidden field', 'nm_municip': 'header label - always visible', 'pop': 'hidden field', 'renda': 'hidden field', 'domicilios': 'hidden field', 'area': 'hidden field', '2023': 'hidden field', });
lyr_rios_3.set('fieldLabels', {'id': 'hidden field', 'osm_id': 'hidden field', 'name': 'hidden field', 'type': 'hidden field', 'width': 'hidden field', });
lyr_Centrodedefesacivil_4.set('fieldLabels', {'id': 'hidden field', 'localizaca': 'hidden field', });
lyr_Centrodedefesacivil_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});