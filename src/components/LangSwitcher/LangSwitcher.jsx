import { useId, useState } from "react"

const LangSwitcher = () => {
    const [lang, setLang] = useState("uk");
    
   const handleSwitcher = (e) => {
    setLang(e.target.value);
   }
    const selectId = useId();
  return (
    <div>
        <label htmlFor={selectId}>Choose language</label>
        <select
        onChange={handleSwitcher}
        value={lang} 
        id={selectId}>
            <option value="en">English</option>
            <option value="uk">Ukrainian</option>
            <option value="fr">Francia</option>
        </select>
    </div>
  )
}

export default LangSwitcher
