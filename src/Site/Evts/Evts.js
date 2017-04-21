import React from 'react';
import {Label, Icon, Accordion} from 'semantic-ui-react';

import evts from './evts.json';

const panels = evts.data.map((evt, i) => ({
    key: `panel-${i}`,
    // title: <Label color='blue' content={evt.familymember} />,
    // title: <span>{evt.familymember} - {evt.name} le {evt.date}</span>,
    // title: <Label color='blue'>{evt.familymember} - {evt.name} le {evt.date}</Label>,
    title: <span>
        <Label color={evt.familymember.color}>
          <Icon name={evt.familymember.icon} />{evt.familymember.name}
        </Label>
        <Label color={evt.rubrique.color}>
          <Icon name={evt.rubrique.icon} />{evt.name}
        </Label>
        <Label color={evt.retard ? 'red' : 'grey'}>
          <Icon name={evt.retard ? 'alarm' : 'calendar'} />{evt.date}
        </Label>
        {evt.retard ? (<Label color='red' tag>{evt.retard}</Label>) : (<span></span>)}
        {evt.priorite ? (<Label color={evt.familymember.color} tag>{evt.priorite}</Label>) : (<span></span>)}
      </span>,
    content: <span>{evt.description}</span>
}));

const Evts = () => (
  <Accordion panels={panels} />
)
export default Evts;
