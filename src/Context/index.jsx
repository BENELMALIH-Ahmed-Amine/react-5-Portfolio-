import { createContext } from "react"
import { Data } from "../Constant"

export const Mycontext = createContext()

export const MyProvider = ({ childern }) => {
    const ToolsD = Data.ToolsData
    const Tools = ToolsD.Tools

    const WebsitesD = Data.WebsitesData
    const Websites = WebsitesD.Websites
    
    const all = { Tools, Websites }

    return <Mycontext.Provider value={all}>{childern}</Mycontext.Provider>
}