// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    // const chatProps = useMultiChatLogic('b7b4ca99-3b2a-43a5-bf40-53a7be61fa35', props.user.username, props.user.secret)
    return(
    <div style={{ height: '100vh'}}>
        {/* <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%' }} /> */}

        <PrettyChatWindow 
            projectId='b7b4ca99-3b2a-43a5-bf40-53a7be61fa35'
            username={props.user.username}
            secret={props.user.username}
            style={{ height: '100%' }}
        />
    </div>    
    ) 
}

export default ChatsPage