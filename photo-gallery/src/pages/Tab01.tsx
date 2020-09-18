// All necessary imports
import React from 'react';
// Icons import
import { camera, arrowRedo } from 'ionicons/icons';
// Components import
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
  IonCol
} from '@ionic/react';
// CSS import
import './Tab.css';
// Hook import
import { usePhotoGallery } from '../hooks/usePhotoGallery';

// First page (tab) function
const Tab01: React.FC = () => {

  const { photos, takePhoto } = usePhotoGallery();
  // Here photo can be clicked/uploaded and stored in the filesystem API
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Camera</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="contentHeading">
          <h1 style={{ fontSize: "400%" }}><IonIcon icon={arrowRedo} />Welcome to Photo-Gallery Application</h1>
          <h2 style={{ fontSize: "200%" }}><IonIcon icon={arrowRedo} />Click on Camera Button to take/upload photos to the Gallery!</h2>
          <h2><IonIcon icon={arrowRedo} />The stored photos in the photos tab/page can also be deleted by clicking on them.</h2>
        </div>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}></IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton color="success" onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab01;