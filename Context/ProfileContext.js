import { createContext, useContext, useState } from "react";

const ProfileContext = createContext(false)

const ProfileContextProvider = ({ children }) => {
    const [pname,    psetName] = useState('Alok')
    const [pemail,   psetEmail] = useState('ranjanalok961@gmail.com')
    const [pphone,   psetPhone] = useState('7485860140')
    const [paddress, psetAddress] = useState('Jalandhar - Delhi, Grand Trunk Rd, Phagwara, Punjab 144001')
    return (
        <ProfileContext.Provider value={[pname, psetName, pemail, psetEmail, pphone, psetPhone, paddress, psetAddress]} >
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => {
    const context = useContext(ProfileContext)
    return context
}

export default ProfileContextProvider;

