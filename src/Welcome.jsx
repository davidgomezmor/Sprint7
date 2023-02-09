import React from "react";
import { Link } from "react-router-dom";
import { Background, Title, WelcomeButton, Text } from "./styled";

export function Welcome() {
    return (
        <Background>
            <Title><h1>Welcome to Budget App</h1></Title>
            <div>
                <WelcomeButton>
                    <Link to="/Budget">Create your budget</Link>
                </WelcomeButton>
                <Text>
                    Calculate the price of our services with our budget App. Initialize the budget form by clicking on the button above.
                </Text>
            </div>
        </Background>
    );
}