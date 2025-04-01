import  {  Text ,  View  }  from  "react-native"
import  HomeScreen  from  './components/Review/Home' ;
import  DetailScreen  from  './components/Review/Detail' ; 
import  AboutScreen  from  './components/Review/About' ;
import  {  useFonts  }  from  'expo-font' ;
import  *  as SplashScreen  from  'expo-splash-screen';
import  {  useEffect  }  from  'react' ;

SplashScreen . preventAutoHideAsync ();

const  App  =  ()  =>  {
    const  [ loaded ,  error ]  =  useFonts ({
        'OpenSans-Regular' :  require ( './assets/fonts/OpenSans-Regular.ttf'),
    });

    useEffect (()  =>  {
        if ( loaded  ||  error )  {
            SplashScreen .hideAsync () ;
        }
    },  [ loaded ,  error ]);

    if ( ! loaded  &&  ! error )  {
        return  null ;
    }
    return (
      <View>
          <HomeScreen />
          <DetailScreen />
          <AboutScreen />
      </View>
    )
  }
  export  default  App ;