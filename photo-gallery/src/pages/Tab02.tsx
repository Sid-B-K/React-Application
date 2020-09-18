// All necessary imports
// Hook import
import React, { useState } from 'react';
import { usePhotoGallery, Photo } from '../hooks/usePhotoGallery';
// Icons import
import { trash, close } from 'ionicons/icons';
// Components import
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonGrid, IonRow,
  IonCol, IonImg, IonActionSheet
} from '@ionic/react';
// CSS import
import './Tab.css';

// Second page 
const Tab02: React.FC = () => {

  const { photos, deletePhoto } = usePhotoGallery();

  // useState hook
  const [photoToDelete, setPhotoToDelete] = useState<Photo>();

  // Photos are stored and displayed on this page, and can also be deleted
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="contentHeading">
          <h1 style={{ fontSize: "250%" }}>Want to know how you look? You're in the right place!</h1>
          <h2 style={{ fontSize: "200%" }}>Don't worry, If you did't like it, click it then delete it!</h2>
        </div>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="4" key={index}>
                <IonImg onClick={() => setPhotoToDelete(photo)}
                  src={photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[{
            text: 'Delete',
            role: 'destructive',
            icon: trash,
            handler: () => {
              if (photoToDelete) {
                deletePhoto(photoToDelete);
                setPhotoToDelete(undefined);
              }
            }
          }, {
            text: 'Cancel',
            icon: close,
            role: 'cancel'
          }]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab02;
