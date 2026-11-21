// Securit West Midlands Interchange — survey entries.
// Keep external access links empty until verified and provided.
window.WMI_SURVEYS = [
  {
    id: 'master',
    name: 'Master overview',
    description: 'Site-wide visual planning model. Flooded-area photogrammetry artefact was cosmetically flattened. Not for measurement.',
    model: { parts: Array.from({length:11}, (_,i)=>'./assets/models/master/master.part'+String.fromCharCode(97+Math.floor(i/26),97+i%26)), bytes: 0 },
    droneDeployUrl: 'https://www.dronedeploy.com/app2/sites/6b005750f2724a2ffcd115f0/maps/6b005da7bd12d1e0271e3511?jwt_token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZiMDA1ZGQ1YTliYTFhZTRhYjliMWJjMiIsInR5cGUiOiJQdWJsaWNTaGFyZVYyIiwiYWNjZXNzX3R5cGUiOiJwbGFuIn0.GUHho-Ph8HZobLSjuG7ZnMcEw-GwQamhtDXZHB4xJsPK7A9lJ5GGuiiVgJVcBrB-qIjyT1qPY0uniHisRhKcYw',
    pdfUrl: './downloads/WestMidlandsInterchange_AllPlots_2026-11-20.pdf'
  },
  ...Array.from({length:11},(_,i)=>({
    id: 'plot-'+String(i+1).padStart(2,'0'),
    name: 'Plot '+String(i+1).padStart(2,'0'),
    description: 'Individual survey plot. Model and source links pending.',
    model: {parts:[],bytes:0},
    droneDeployUrl: '',
    pdfUrl: ''
  }))
];
