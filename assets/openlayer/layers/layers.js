var wms_layers = [];

var format_Ceniza_0 = new ol.format.GeoJSON();
var features_Ceniza_0 = format_Ceniza_0.readFeatures(json_Ceniza_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ceniza_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ceniza_0.addFeatures(features_Ceniza_0);
var lyr_Ceniza_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ceniza_0, 
                style: style_Ceniza_0,
                interactive: true,
                title: '<img src="styles/legend/Ceniza_0.png" /> Ceniza'
            });
var format_Lagrima_1 = new ol.format.GeoJSON();
var features_Lagrima_1 = format_Lagrima_1.readFeatures(json_Lagrima_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lagrima_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lagrima_1.addFeatures(features_Lagrima_1);
var lyr_Lagrima_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lagrima_1, 
                style: style_Lagrima_1,
                interactive: true,
                title: '<img src="styles/legend/Lagrima_1.png" /> Lagrima'
            });
var format_Culebra_2 = new ol.format.GeoJSON();
var features_Culebra_2 = format_Culebra_2.readFeatures(json_Culebra_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Culebra_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Culebra_2.addFeatures(features_Culebra_2);
var lyr_Culebra_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Culebra_2, 
                style: style_Culebra_2,
                interactive: true,
                title: '<img src="styles/legend/Culebra_2.png" /> Culebra'
            });
var format_Polvo_3 = new ol.format.GeoJSON();
var features_Polvo_3 = format_Polvo_3.readFeatures(json_Polvo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polvo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polvo_3.addFeatures(features_Polvo_3);
var lyr_Polvo_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Polvo_3, 
                style: style_Polvo_3,
                interactive: true,
                title: '<img src="styles/legend/Polvo_3.png" /> Polvo'
            });
var format_Points_4 = new ol.format.GeoJSON();
var features_Points_4 = format_Points_4.readFeatures(json_Points_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Points_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Points_4.addFeatures(features_Points_4);
var lyr_Points_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Points_4, 
                style: style_Points_4,
                interactive: true,
                title: '<img src="styles/legend/Points_4.png" /> Points'
            });

lyr_Ceniza_0.setVisible(true);lyr_Lagrima_1.setVisible(true);lyr_Culebra_2.setVisible(true);lyr_Polvo_3.setVisible(true);lyr_Points_4.setVisible(true);
var layersList = [lyr_Ceniza_0,lyr_Lagrima_1,lyr_Culebra_2,lyr_Polvo_3,lyr_Points_4];
lyr_Ceniza_0.set('fieldAliases', {'Ceniza': 'Ceniza', });
lyr_Lagrima_1.set('fieldAliases', {'Lagrima': 'Lagrima', });
lyr_Culebra_2.set('fieldAliases', {'Culebra': 'Culebra', });
lyr_Polvo_3.set('fieldAliases', {'Polvo': 'Polvo', });
lyr_Points_4.set('fieldAliases', {'ID': 'ID', 'fk_region': 'fk_region', 'ELEV': 'ELEV', 'NAME': 'NAME', 'USE': 'USE', });
lyr_Ceniza_0.set('fieldImages', {'Ceniza': 'TextEdit', });
lyr_Lagrima_1.set('fieldImages', {'Lagrima': 'TextEdit', });
lyr_Culebra_2.set('fieldImages', {'Culebra': 'TextEdit', });
lyr_Polvo_3.set('fieldImages', {'Polvo': 'TextEdit', });
lyr_Points_4.set('fieldImages', {'ID': 'TextEdit', 'fk_region': 'TextEdit', 'ELEV': 'TextEdit', 'NAME': 'TextEdit', 'USE': 'TextEdit', });
lyr_Ceniza_0.set('fieldLabels', {'Ceniza': 'header label - always visible', });
lyr_Lagrima_1.set('fieldLabels', {'Lagrima': 'header label - always visible', });
lyr_Culebra_2.set('fieldLabels', {'Culebra': 'header label - always visible', });
lyr_Polvo_3.set('fieldLabels', {'Polvo': 'header label - always visible', });
lyr_Points_4.set('fieldLabels', {'ID': 'hidden field', 'fk_region': 'hidden field', 'ELEV': 'hidden field', 'NAME': 'no label', 'USE': 'hidden field', });
lyr_Points_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});