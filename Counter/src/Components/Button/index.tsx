import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image``;

interface Props {
    iconName : 'plus' | 'minus'; //여기서 :는 필수값이고 ?는 필수는 아니라는뜻 
    onPress?: () => void;
}

const Button =({ iconName, onPress }: Props) => {
    return (
        <Container onPress={onPress}>
            <Icon
                source={
                    iconName === 'plus'
                    ? require('~/Assets/Images/add.png') //기본사이즈로는 add.png로 설정하고 2x,3x가 올때는 자동으로 설정한다. 그래서 명칭을 @2x 이런식으로함 
                    : require('~/Assets/Images/remove.png')
                }
            />
        </Container>
    );
};
export default Button;