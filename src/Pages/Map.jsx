import React from 'react';

export default function Map() {
    return (
        <div style={{ position: 'relative', textAlign: 'right', height: '500px', width: '100%' }}>
            <div style={{ overflow: 'hidden', background: 'none !important', height: '500px', width: '100%' }}>
                <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Ennaar%20Energy%20Systems%20Plot%20No:%20C-1,%20SIPCOT,%20Industrial%20Growth%20Centre,%20Perundurai,%20Erode%20%E2%80%93%20638%20052,&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    style={{ border: '5%' }}
                    title="Ennaar Boilers Location Map"
                />
            </div>
        </div>
    );
}
