import api from "../api/api";
import { useRef, useState } from "react";
import globalStyles from "../global_styles/globalStyles";
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import LogoContainer from "../components/LogoContainer";
import {Formik} from "formik"
import * as yup from 'yup'
import {TextInputMask} from "react-native-masked-text"
import DatePicker from "react-native-date-picker"


const CadastroCliente = () => {
    const cpfRef = useRef(null)
    const validationSchema = yup.object({
      nome: yup.string().required("campo obrigatório").min(4),
      email: yup.string().required("campo obrigatório").email("email inválido"),
      senha: yup.string().required("campo obrigatório"),
      dataNasc: yup.string().required("campo obrigatório").test("test date", "data inválida", (date) => checkDate(date)),
      cpf: yup.string().required("campo obrigatório").test("test-cpf","cpf inválido", () => cpfRef?.current.isValid()),
      tel: yup.string().required("campo obrigatório"),
      instagram: yup.string(),
      endereco: yup.string().required("campo obrigatório")
    })

    const send = (values) => {
      console.log('foi')
       api.request({
        url:"/addCliente",
        data:values,
        method: "POST"
      }).then((result) => {
          console.log(result.data)
          setMessage(result.data.message)
        }).catch((err) => {
          console.log(err)
        })
    }

    const checkDate = (date) => {
      const dateArray = date?.split("/")
        if(dateArray && dateArray.length == 3 && dateArray[2].length == 4){
          const inputDate = new Date(parseInt(dateArray[2]) ,parseInt(dateArray[1]) ,parseInt(dateArray[0]) )
          const currentDate = new Date()
          const msInput = inputDate.getTime();
          const msCurrent = currentDate.getTime()
          return(msInput < msCurrent)
        }
    }

    return ( 
      <ScrollView>
        
        <LogoContainer/>
        
        <Formik
          initialValues={{nome: '', email: '', senha: '', dataNasc: '', cpf: '', tel: '', instagram: '', endereco: ''}}
          onSubmit={(values) => send(values)}
          validationSchema={validationSchema}
        >
          {
            ({handleChange, handleSubmit,handleBlur, touched, errors, values}) => 
               (
                <View style={styles.formContainer}>
                  <Text style={styles.formHeader}>CADASTRE-SE</Text>
                  <TextInput 
                    value={values.nome}
                    onChangeText={handleChange('nome')}
                    style={[ styles.input]} 
                    placeholder="Preencha seu nome completo"  
                    onBlur={handleBlur('nome')}/>
                  <Text style={styles.errorMessage}>{touched.nome && errors.nome}</Text>
                  <TextInput 
                    value={values.email} 
                    onChangeText={handleChange('email')} 
                    style={[ styles.input]} 
                    placeholder="Preencha seu e-mail"  
                    onBlur={handleBlur('email')}/>
                  <Text style={styles.errorMessage}>{touched.email && errors.email}</Text>
                  <TextInput value={values.senha}
                    onChangeText={handleChange('senha')} 
                    secureTextEntry={true}
                    style={[ styles.input]} 
                    placeholder="Senha"  
                    onBlur={handleBlur('senha')}/>
                  <Text style={styles.errorMessage}>{touched.senha && errors.senha}</Text>
                  <TextInputMask
                    type='datetime'
                    options={{
                      format:'dd/mm/yyyy'
                    }} 
                    value={values.dataNasc}
                    onChangeText={handleChange('dataNasc')} 
                    style={[styles.input]} 
                    placeholder="Data de Nascimento"  
                    onBlur={handleBlur('dataNasc')}/>
                  <Text style={styles.errorMessage}>{touched.dataNasc && errors.dataNasc}</Text>
                  <TextInputMask value={values.cpf}
                    type="cpf"
                    onChangeText={handleChange('cpf')}
                    style={[styles.input]}
                    ref={cpfRef} 
                    placeholder="CPF"  
                    onBlur={handleBlur("cpf")}/>
                  <Text style={styles.errorMessage}>{touched.cpf && errors.cpf}</Text>
                  <TextInputMask value={values.tel}
                    type="cel-phone" 
                    onChangeText={handleChange('tel')} 
                    style={[ styles.input]} 
                    placeholder="Telefone" 
                    onBlur={handleBlur("tel")}/>
                  <Text style={styles.errorMessage}>{touched.tel && errors.tel}</Text>
                  <TextInput value={values.instagram}
                    onChangeText={handleChange('instagram')}
                    style={[ styles.input]}
                    placeholder="Instagram" 
                    onBlur={handleBlur('instagram')}/>
                  <Text style={styles.errorMessage}>{touched.instagram && errors.instagram}</Text>
                  <TextInput value={values.endereco} 
                    onChangeText={handleChange('endereco')} 
                    style={[ styles.input]} 
                    placeholder="Preencha seu Endereço" 
                    onBlur={handleBlur("endereco")}/>
                  <Text style={styles.errorMessage}>{touched.endereco && errors.endereco}</Text>
                  <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                  </TouchableOpacity>
                </View>
              )
            
          }
          </Formik>
        </ScrollView>
     );
}
 

const styles = StyleSheet.create({
    formContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom:40,
      paddingTop:20,
      marginTop: -120,
      elevation: 3,
      width: "90%",
      alignSelf: "center",
      elevation: 5,
      marginBottom: 20
    },
    
    input:{
      width:"70%",
      borderBottomWidth:2,
      marginTop: 30,
      fontSize:13,
      borderBottomColor: "#615f6c",
      fontFamily: "poppins-light"
    },
    button:{
      backgroundColor: "#58c2d5",
      width: 140,
      borderRadius: 30,
      height:50,
      justifyContent:"center",
      alignItems:"center",
      shadowOffset: {
        width: 10,
        height: 5,
      },
      shadowOpacity: 0.8,
      shadowRadius: 7,
      elevation: 8,
    },
    buttonText:{
      color: "white",
      textAlign: "center",
      fontSize: 14,
      margin: 0,
      fontFamily: "poppins-bold"
    },
    formHeader:{
      fontFamily: "poppins-bold",
      fontSize:16
    },
    errorMessage:{
      marginVertical: 10,
      color: "red"
    }
  });
export default CadastroCliente;

