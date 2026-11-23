const masterModel = { parts: Array.from({length:11},(_,i)=>'./assets/models/master/master.part'+String.fromCharCode(97,97+i)), bytes: 219249520 };
const plot01Model = { parts: Array.from({length:7},(_,i)=>'./assets/models/plot-01/plot01.part'+String.fromCharCode(97,97+i)), bytes: 141234612 };
const plot02Model = { parts: Array.from({length:4},(_,i)=>'./assets/models/plot-02/plot02.part'+String.fromCharCode(97,97+i)), bytes: null };
const masterDroneDeployUrl = "https://www.dronedeploy.com/app2/sites/6b005750f2724a2ffcd115f0/maps/6b005da7bd12d1e0271e3511?jwt_token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZiMDA1ZGQ1YTliYTFhZTRhYjliMWJjMiIsInR5cGUiOiJQdWJsaWNTaGFyZVYyIiwiYWNjZXNzX3R5cGUiOiJwbGFuIn0.GUHho-Ph8HZobLSjuG7ZnMcEw-GwQamhtDXZHB4xJsPK7A9lJ5GGuiiVgJVcBrB-qIjyT1qPY0uniHisRhKcYw";
const entry=(id,name,pdf,description)=>({id,name,description,model:masterModel,droneDeployUrl:masterDroneDeployUrl,pdfUrl:'./downloads/'+pdf});
window.WMI_SURVEYS = [
  entry('master','All plots — Master overview','WestMidlandsInterchange_AllPlots_2026-11-20.pdf','Site-wide 3D visualisation with all-plots orthomosaic PDF. The master model includes a cosmetic water-surface repair; do not use it for measurements.'),
  {...entry('plot-01','Plot 1','Plot_01.pdf','Dedicated optimised Plot 1 3D model and orthomosaic PDF for visual security planning.'),model:plot01Model},
  {...entry('plot-02','Plot 2','Plot_02.pdf','Dedicated optimised Plot 2 3D model and orthomosaic PDF for visual security planning.'),model:plot02Model},
  entry('plots-03-04-05','Plots 3, 4 & 5','Plots_03_04_05.pdf','Combined orthomosaic for plots 3, 4 and 5. Site-wide 3D model remains visible.'),
  entry('plots-06-07','Plots 6 & 7','Plots_06_07.pdf','Combined orthomosaic for plots 6 and 7. Site-wide 3D model remains visible.'),
  entry('plot-08','Plot 8','Plot_08.pdf','Plot 8 orthomosaic PDF. Site-wide 3D model remains visible.'),
  entry('plot-08-special','Plot 8 — High-resolution special interest','Plot_08_High_Resolution_Special_Interest.pdf','High-resolution special-interest orthomosaic for Plot 8. Site-wide 3D model remains visible.'),
  entry('plot-09','Plot 9','Plot_09.pdf','Plot 9 orthomosaic PDF. Site-wide 3D model remains visible.'),
  entry('plot-10','Plot 10','Plot_10.pdf','Plot 10 orthomosaic PDF. Site-wide 3D model remains visible.'),
  entry('plot-11','Plot 11','Plot_11.pdf','Plot 11 orthomosaic PDF. Site-wide 3D model remains visible.')
];
