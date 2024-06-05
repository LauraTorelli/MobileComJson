import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Linking, ScrollView, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import jogosData from './app.json'; // Importe os dados do JSON

function CadastroScreen({ navigation }) {
  const handleLogin = () => {
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <ImageBackground source={{ uri: 'https://images3.alphacoders.com/909/909391.jpg' }} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={stylesLogin.containerInner}>
          <Text style={stylesLogin.title}>REGISTRE-SE</Text>

          <TouchableOpacity style={[stylesLogin.button, stylesLogin.googleButton]} onPress={() => console.log('Registre-se com Google')}>
            <Text style={stylesLogin.buttonText}>Registre-se com Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[stylesLogin.button, stylesLogin.facebookButton]} onPress={() => console.log('Registre-se com Facebook')}>
            <Text style={stylesLogin.buttonText}>Registre-se com Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[stylesLogin.button, stylesLogin.outlookButton]} onPress={() => console.log('Registre-se com Outlook')}>
            <Text style={stylesLogin.buttonText}>Registre-se com Outlook</Text>
          </TouchableOpacity>

          <Text style={stylesLogin.orText}>ou</Text>

          <TextInput
            style={[stylesLogin.input, stylesLogin.emailInput]}
            placeholder="Email"
          />

          <TextInput
            style={[stylesLogin.input, stylesLogin.passwordInput]}
            placeholder="Senha"
            secureTextEntry
          />

          <Button title="Registre-se" onPress={handleLogin} />
        </View>
      </View>
    </ImageBackground>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Inicio')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
});

function JogosScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredGames, setFilteredGames] = useState(jogosData);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text === '') {
      setFilteredGames(jogosData);
    } else {
      const filtered = jogosData.filter((jogo) =>
        jogo.partida.toLowerCase().includes(text.toLowerCase()) ||
        jogo.campeonato.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredGames(filtered);
    }
  };

  return (
    <View style={stylesJogos.container}>
      <Text style={stylesJogos.header}>Tabela de Jogos</Text>
      <TextInput
        style={stylesJogos.searchInput}
        placeholder="Pesquisar jogos..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <ScrollView style={stylesJogos.scrollView}>
        {filteredGames.map((jogo, index) => (
          <View key={index} style={stylesJogos.section}>
            <Text style={stylesJogos.sectionHeader}>{jogo.campeonato}</Text>
            <View style={stylesJogos.game}>
              <Text style={stylesJogos.gameText}>{jogo.partida}</Text>
              <Text style={stylesJogos.gameText}>{jogo.resultado}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <Text style={stylesJogos.footer}><b>Todos os direitos reservados @2024</b></Text>
    </View>
  );
}

const stylesJogos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: 'rgb(255, 140, 0)',
    width: '100%',
    color: 'white',
    height: 75,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  game: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  gameText: {
    fontSize: 16,
  },
  footer: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: 'rgb(255, 140, 0)',
    padding: 10,
  },
});

function InicioScreen({ navigation }) {
  return (
    <View style={stylesInicio.container}>
      <View style={stylesInicio.header}>
        <Image source={{ uri: 'https://github.com/GabrielBarbxsaaZx999/logoiamagens/blob/main/Logo_Branco.png?raw=true' }} style={stylesInicio.logo} />
        <View style={stylesInicio.searchContainer}>
          <TextInput style={stylesInicio.pesquisar} placeholder="  Pesquisar..." />
        </View>
        <TouchableOpacity style={stylesInicio.button} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={stylesInicio.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesInicio.button2} onPress={() => navigation.navigate('Login')}>
          <Text style={stylesInicio.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={stylesInicio.tudo}>
        <View style={stylesInicio.tabela}>
          <TouchableOpacity style={stylesInicio.tabelaButton} onPress={() => navigation.navigate('Jogos')}>
            <Text style={stylesInicio.tabelaButtonText}>Ir para Tabela de Jogos</Text>
          </TouchableOpacity>
        </View>
        <View style={stylesInicio.sections}>
          <Text>3</Text>
        </View>
        <View style={stylesInicio.sections}>
          <Text>4</Text>
        </View>
      </View>
      <View style={stylesInicio.footer}>
        Todos os direitos reservados@2024
      </View>
    </View>
  );
}

const stylesInicio = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'rgb(255, 140, 0)',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 180,
    height: 55,
  },
  searchContainer: {
    flex: 1,
    marginLeft: 10,
  },
  pesquisar: {
    height: 30,
    width: '90%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'gray',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 15,
  },
  button2: {
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 60,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  tudo: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  sections: {
    margin: 20,
    width: '90%',
    borderRadius: 10,
    color: 'black',
    height: 200,
    borderWidth: 5,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: 'rgb(255, 140, 0)',
    padding: 15,
    width: '100%',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Perpetua',
  },
  tabelaButton: {
    backgroundColor: 'black',
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 15,
  },
  tabelaButtonText: {
    color: 'white',
    fontSize: 15,
  },
});

function LoginScreen() {
  const handleLogin = () => {
    alert('Login realizado com sucesso!');
  };

  return (
    <ImageBackground source={{ uri: 'https://wallpapers.com/images/featured/cool-soccer-xx9ly9v0yostbag2.jpg' }} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={stylesLogin.containerInner}>
          <Text style={stylesLogin.title}>BEM-VINDO DE VOLTA!</Text>

          <TouchableOpacity style={[stylesLogin.button, stylesLogin.googleButton]} onPress={() => console.log('Login com Google')}>
            <Text style={stylesLogin.buttonText}>Faça login com Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[stylesLogin.button, stylesLogin.facebookButton]} onPress={() => console.log('Login com Facebook')}>
            <Text style={stylesLogin.buttonText}>Faça login com Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[stylesLogin.button, stylesLogin.outlookButton]} onPress={() => console.log('Login com Outlook')}>
            <Text style={stylesLogin.buttonText}>Faça login com Outlook</Text>
          </TouchableOpacity>

          <Text style={stylesLogin.orText}>ou</Text>

          <TextInput
            style={[stylesLogin.input, stylesLogin.emailInput]}
            placeholder="Email ou nome de usuário"
          />
          <TextInput
            style={[stylesLogin.input, stylesLogin.passwordInput]}
            placeholder="Senha"
            secureTextEntry
          />

          <Text style={stylesLogin.forgotPasswordText} onPress={() => Linking.openURL('https://support.google.com/accounts/answer/7682439?hl=pt-BR')}>
            esqueceu sua senha? clique aqui
          </Text>

          <Button title="Login" onPress={handleLogin} />
        </View>
      </View>
    </ImageBackground>
  );
}

const stylesLogin = StyleSheet.create({
  containerInner: {
    alignItems: 'center',
    backgroundColor: 'rgba(248, 247, 240, 0.8)',
    padding: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
    width: 300,
    height: 30,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    backgroundColor: '#fff',
  },
  facebookButton: {
    backgroundColor: '#fff',
  },
  outlookButton: {
    backgroundColor: '#fff',
  },
  orText: {
    marginVertical: 16,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 12,
    marginBottom: 16,
    width: 300,
    height: 25,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  emailInput: {
    backgroundImage: 'url(https://www.pngmart.com/files/10/User-Account-PNG-Transparent-Image.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 20,
    backgroundPosition: '15px left',
  },
  passwordInput: {
    backgroundImage: 'url(https://w7.pngwing.com/pngs/906/104/png-transparent-computer-icons-padlock-lock-technic-symbol-key-thumbnail.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 20,
    backgroundPosition: '15px left',
    webkitTextSecurity: 'disc',
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#4285F4',
    textDecorationLine: 'underline',
  },
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Jogos" component={JogosScreen} />
        <Stack.Screen name="Inicio" component={InicioScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
