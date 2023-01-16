const key = 'WxvxdXNE2Dk7q7cfL5gu9qHJRyfUJ7qchQqmk3DJ';

const API = {
    APOD: `https://api.nasa.gov/planetary/apod?api_key=${key}`,
    Asteroides: { 
        Neo: {
            Feed: `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${key}`,// Alimentação
            LookUp: `https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=${key}`, // pesquisa
            Browser: `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${key}`
        }
    },
    DONKI: {
        CME: `https://api.nasa.gov/DONKI/CME?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${key}`, // Coronal Mass Ejection CME
        CMEAnalysis: `https://api.nasa.gov/DONKI/CMEAnalysis?startDate=2016-09-01&endDate=2016-09-30&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=ALL&api_key=${key}`,// Coronal Mass Ejection CME Analysis
        GST: `https://api.nasa.gov/DONKI/GST?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${key}`,// Geomagnetic Storm - Tempestade Geomagnetica.
        IPS: `https://api.nasa.gov/DONKI/IPS?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&location=LOCATION&catalog=CATALOG&api_key=DEMO_KEY`, // Choque Interplanetario Interplanetario Shock
        FLR: `https://api.nasa.gov/DONKI/FLR?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${key}`,// Solar Flare - Explosão Solar
        SEP:`https://api.nasa.gov/DONKI/SEP?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${key}`,// Particula Energetica - Solar Energetic Particle
        MPC:`https://api.nasa.gov/DONKI/MPC?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${key}`,// Magnetopause Crossing - Travessia da Magnetopausa
        RBE:`https://api.nasa.gov/DONKI/RBE?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${key}`,// Radiation Belt Enhancement - Aprimoramento do Cinturão de radiação
        HSS: `https://api.nasa.gov/DONKI/HSS?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${key}`, // Fluxo de alta velocidade - High Speed Stream
        WSA:`https://api.nasa.gov/DONKI/WSAEnlilSimulations?startDate=2016-01-06&endDate=2016-01-06&api_key=${key}`,// Enlil Simulação - Simulation
        Notifications:`https://api.nasa.gov/DONKI/notifications?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=${key}`
    },
    Earth: {
        Imagery: (lat, lng, year, month, day) => `https://api.nasa.gov/planetary/earth/imagery?lon=${lng}&lat=${lat}&date=${year}-${month}-${day}&api_key=${key}`,
        Assets: (lng, lat, year, month, day) => `https://api.nasa.gov/planetary/earth/assets?lon=-${lng}&lat=${lat}&date=${year}-${month}-${day}&&dim=0.10&api_key=${key}`
    },
    EONET: {
        Events: `https://eonet.gsfc.nasa.gov/api/v2.1/events`,
        Categories: 'https://eonet.gsfc.nasa.gov/api/v2.1/categories',
        Layers: `https://eonet.gsfc.nasa.gov/api/v2.1/layers`
    },
    EPIC:{
        ImageIdentifier: `https://api.nasa.gov/EPIC/api/natural/images?api_key=${key}`,
        Image: (image) => `https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/${image}.png?api_key=${key}`,
        Dates: `https://api.nasa.gov/EPIC/api/natural/all?api_key=${key}`,
        LookUpDate: (date) => `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${key}`
    },
    MissionInsight: `https://api.nasa.gov/insight_weather/?api_key=${key}&feedtype=json&ver=1.0`,
    MarsRover:{
        Sol: (page = 1) => `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=${key}`,
        Camera:`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${key}`,
        Photos:`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${key}` 
    }
}

const requests = (url) => {
    if(url){
        return fetch(`${url}`)
        .then( json => json.json() )
        .then( data => console.log(data) )
    } else {
        return ;
    }
   
}

export {
    API, 
    requests
}

{/* 
 DONKI
O Space Weather Database Of Notifications, Knowledge, Information (DONKI) é uma ferramenta on-line abrangente para meteorologistas espaciais, cientistas e a comunidade científica espacial em geral. DONKI narra as interpretações diárias de observações, análises, modelos, previsões e notificações do clima espacial fornecidas pelo Centro de Pesquisa do Clima Espacial (SWRC), funcionalidade abrangente de pesquisa de base de conhecimento para oferecer suporte à resolução de anomalias e pesquisa em ciência espacial, ligações inteligentes, relacionamentos, causa -e-efeitos entre as atividades do clima espacial e o acesso abrangente da API do serviço da Web às informações armazenadas no DONKI.

Earth

{
    Imagery

Este endpoint recupera a imagem do Landsat 8 para o local e data fornecidos. A resposta incluirá a data e o URL da imagem mais próxima da data fornecida. O recurso solicitado pode não estar disponível para a data exata na solicitação. Você pode recuperar um JSON que contém as entradas fornecidas e um URL para a imagem resultante por meio do endpoint de ativos. O endpoint de recursos não retorna mais uma lista de possíveis imagens dentro do seu intervalo de datas devido a uma alteração no lado da API do Google Earth Engine.

A pontuação da nuvem era um cálculo opcional que retorna a porcentagem da imagem consultada que é coberta por nuvens, mas não está disponível nas versões atuais da API. se FalseseHTTP Request

Ativos

Este ponto de extremidade recupera as datas e os nomes de ativos para imagens disponíveis mais próximas para um local e data fornecidos. O satélite passa sobre cada ponto da Terra aproximadamente uma vez a cada dezesseis dias. Esta é uma visualização incrível do padrão de aquisição das imagens do Landsat 8. O objetivo desse endpoint é principalmente oferecer suporte ao uso do endpoint de imagens.

}

*/}