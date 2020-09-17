import React from 'react';
import { IonRow, IonCol, IonCardContent, IonCard } from '@ionic/react';


const BmiResult: React.FC<{result: number}> = props => {
   
    const bmiIndex = '';
    
    const finalResult = +props.result.toFixed(2);

    if (finalResult < 18){
        bmiIndex = "Under Weight";
      } else if (finalResult >= 18 && finalResult < 25){
        bmiIndex = "Healthy";
      } else if (finalResult >= 25 && finalResult < 30){
        bmiIndex = "Over Weight";
      } else if (finalResult >= 30 && finalResult < 40){
        bmiIndex = "Obese";
      } else { 
        bmiIndex = "Extremely Obese";
      }

    return(
        <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent className="ion-text-center">
                  <h2>Your Body Mass Index</h2>
                  <h2>{finalResult}</h2>
                  <h2>bmiIndex</h2>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
    );
};

export default BmiResult;