import React from 'react';
import Switch from 'react-switch';
import { Container, ToggleLabel, ToggleSelector } from './styles';

const Toggle: React.FC = () => (
    <Container>
        <ToggleLabel>Light</ToggleLabel>
            <ToggleSelector
                checked
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={() => console.log('mudou')}
            >
            </ToggleSelector>
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
)

export default Toggle;