// SecurIT West Midlands Interchange — survey entries.
// Keep external access links empty until verified and provided.
window.WMI_SURVEYS = [
  {
    id: 'master',
    name: 'Master overview',
    description: 'Site-wide visual planning model. Flooded-area photogrammetry artefact was cosmetically flattened. Not for measurement.',
    model: { parts: Array.from({length:11}, (_,i)=>'./assets/models/master/master.part'+String.fromCharCode(97+Math.floor(i/26),97+i%26)), bytes: 0 },
    droneDeployUrl: '',
    pdfUrl: ''
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
