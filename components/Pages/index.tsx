import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles




  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={"TETHER price"} style={{ minHeight: 300, margin: 10, width: "calc(100% - 20px)" }}>
        
        <br-xx/>

        <div style={{width:"100%", height:50, backgroundColor:" #ff5722  ", borderRadius:5,
          textAlign:"center"
          }}>
            <br-x/>
            <br-xx/>
            Price at the moment: {(props.p.price as number).toLocaleString("fa-IR")}

        </div>
        <br-x/>
        <div style={{width:"100%", height:50, backgroundColor:"  #ffeb3b  ", borderRadius:5,
          textAlign:"center"
          }}>
            <br-x/>
            <br-xx/>
            Price changes in the past 24h: {(props.p.last24h as number).toLocaleString("fa-IR")}

        </div>
        <br-x/>
        <div style={{width:"100%", height:50, backgroundColor:" #4caf50  ", borderRadius:5,
          textAlign:"center"
          }}>
            <br-x/>
            <br-xx/>
            Changes in the past 7Days: {(parseFloat(props.p.diff7d) as number).toLocaleString("fa-IR")}%

        </div>
        <br-x/>
        <div style={{width:"100%", height:50, backgroundColor:" #03a9f4  ", borderRadius:5,
          textAlign:"center"
          }}>
            <br-x/>
            <br-xx/>
            Changes in the past month:{(parseFloat(props.p.diff30d) as number).toLocaleString("fa-IR")}%

        </div>

        <br-xx/>

        <center style={{fontSize:10}}>
          Made by Mohammad Rezaei[black band]
        </center>
      </Window>
    </div>
    
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let res = await fetch("https://api.tetherland.com/currencies")
    let data = await res.json()
    let p = data.data.currencies.USDT
    
    console.log("PRICEeeeeeee",p)


  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}