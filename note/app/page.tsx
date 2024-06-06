'use client'
import { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";


export default function Home() {
  const { unityProvider } = useUnityContext({
    // loaderUrl: "https://github.com/jongmin31337/testtest/blob/main/Terrain_Mountains_1024.loader.js",
    // dataUrl: "https://github.com/jongmin31337/testtest/blob/main/Terrain_Mountains_1024.data",
    // frameworkUrl: "https://github.com/jongmin31337/testtest/blob/main/Terrain_Mountains_1024.framework.js",
    // codeUrl: "https://github.com/jongmin31337/testtest/blob/main/Terrain_Mountains_1024.wasm",
    loaderUrl: "https://cdn.golfday.uneekor.com/test/GolfCourse_URP_0524.loader.js",
    dataUrl: "https://cdn.golfday.uneekor.com/test/GolfCourse_URP_0524.data",
    frameworkUrl: "https://cdn.golfday.uneekor.com/test/GolfCourse_URP_0524.framework.js",
    codeUrl: "https://cdn.golfday.uneekor.com/test/GolfCourse_URP_0524.wasm",
    // loaderUrl: "/webgl/Terrain_Mountains_1024.loader.js",
    // dataUrl: "/webgl/Terrain_Mountains_1024.data",
    // frameworkUrl: "/webgl/Terrain_Mountains_1024.framework.js",
    // codeUrl: "/webgl/Terrain_Mountains_1024.wasm",
  });


    useEffect(() => {
    console.log('navigator', navigator);
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js', { scope: '/' })
        .then((registration) => {
          console.log(
            'Service worker registered successfully. Scope:',
          );
        })
        .catch((error) => {
          console.error('Service worker registration failed:', error);
        });
    } else {
      console.log('Service worker not working')
    }
  }, []);


  return <Unity unityProvider={unityProvider} />;

}
