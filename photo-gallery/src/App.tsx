import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cameraOutline, images } from 'ionicons/icons';
import Tab1 from './pages/Tab01';
import Tab2 from './pages/Tab02';

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

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab01" component={Tab1} exact={true} />
          <Route path="/tab02" component={Tab2} exact={true} />
          <Route path="/" render={() => <Redirect to="/tab01" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom" onClick={() => window.location.reload(false)}>
          <IonTabButton tab="tab01" href="/tab01">
            <IonIcon icon={cameraOutline} />
            <IonLabel>Camera</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab02" href="/tab02">
            <IonIcon icon={images} />
            <IonLabel>Photos</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
