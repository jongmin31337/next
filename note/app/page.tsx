'use client'
import { Unity, useUnityContext } from "react-unity-webgl";


export default function Home() {
  const { unityProvider } = useUnityContext({
    // loaderUrl: "https://cdn.golfday.uneekor.com/test/GolfCourse_URP_0524.loader.js",
    // dataUrl: "https://cdn.golfday.uneekor.com/test/GolfCourse_URP_0524.data",
    // frameworkUrl: "https://cdn.golfday.uneekor.com/test/GolfCourse_URP_0524.framework.js",
    // codeUrl: "https://cdn.golfday.uneekor.com/test/GolfCourse_URP_0524.wasm",
        loaderUrl: "/webgl/Test.loader.js",
    dataUrl: "/webgl/Test.data",
    frameworkUrl: "/webgl/Test.framework.js",
    codeUrl: "/webgl/Test.wasm",
  });


  return <Unity unityProvider={unityProvider} />;

}
