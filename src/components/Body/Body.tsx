import {
  BodyContent,
  BoxTitle,
  ContainerBody,
  DataInfo,
  Info,
  ScriptForDeleteAccount,
  Step,
  TextStep,
  Title,
} from "./styled";

const Body = () => {
  return (
    <ContainerBody>
      <BoxTitle>
        <Title>Cut - tratamento de dados</Title>
      </BoxTitle>

      <BodyContent>
        <DataInfo>
          <Title>Quais dados são mantidos pelo app?</Title>
          <Info>- Número de telefone celular</Info>
          <Info>- Senha</Info>
          <Info>- Imagens de perfil</Info>
          <Info>- Dados financeiros</Info>

          <Info style={{ paddingTop: 30 }}>
            *Não salvados os dados de cartão nos nossos servidores, utilizamos
            um gateway de pagamento chamado{" "}
            <a
              href="https://stripe.com/br"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              STRIPE
            </a>
            , que segue todas as politicas de proteção de dados
          </Info>
        </DataInfo>

        <ScriptForDeleteAccount>
          <Title>Etapas para excluir os dados acima:</Title>

          <Step>
            <TextStep> - Abra o app e entre na sua conta</TextStep>
            <TextStep>- Clique em perfil</TextStep>
            <TextStep>- Clique em meus dados</TextStep>
            <TextStep>- Clique em excluir conta</TextStep>
          </Step>
        </ScriptForDeleteAccount>
      </BodyContent>
    </ContainerBody>
  );
};

export default Body;
