import { IonApp, setupIonicReact } from '@ionic/react';
import React, {useRef, useState} from 'react';
import { calculator, refresh } from "ionicons/icons";
import {
  IonButton,
  IonHeader,
  IonContent,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);

  const [bmiValue, setBmiValue] = useState<number>();
  
  //Function to calculate BMI and set value of BMI 
  const calculateBMI = () => {
    const weight = weightInputRef.current!.value;
    const height = heightInputRef.current!.value;

    if (!weight || !height || +weight<=0 || +height<=0) {
      return;
    }
    const BMI = +weight / (+height * +height);
    setBmiValue(BMI);
  };

  //Function to reset input fields
  const reset = () => {
    weightInputRef.current!.value = "";
    heightInputRef.current!.value = "";
  };

  return (
    <IonApp>
       <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>BMI calculator App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Your Weight (In Kg)</IonLabel>
                <IonInput ref={weightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Your Height (In Metres)</IonLabel>
                <IonInput ref={heightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          
          {/* Buttons to calculate BMI and reset input fields */}
          <IonRow>
            <IonCol>
              <IonButton onClick={calculateBMI}>
                <IonIcon slot="start" icon={calculator} />
                Calculate
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={reset}>
                <IonIcon slot="start" icon={refresh} />
                Reset
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        {bmiValue && (
          <IonCard>
            <IonCardContent>{bmiValue}</IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonApp>
  );
};

export default App;
