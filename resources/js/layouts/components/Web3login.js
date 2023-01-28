import SignClient from '@walletconnect/sign-client'
import { Web3Modal } from '@web3modal/standalone'
import { useEffect, useState } from 'react'


// 2. Configure web3Modal
const web3Modal = new Web3Modal({ projectId: "cee7aa2577d16c96bbb11cd268e77a94" })

const Web3login = () => {
  const [signClient, setSignClient] = useState<SignClient | undefined>(undefined)

  // 3. Initialize sign client
  async function onInitializeSignClient() {
    const client = await SignClient.init({ projectId: "cee7aa2577d16c96bbb11cd268e77a94" })
    setSignClient(client)
  }

  // 4. Initiate connection and pass pairing uri to the modal
  async function onOpenModal() {
    if (signClient) {
      const namespaces = {
        eip155: { methods: ['eth_sign'], chains: ['eip155:1'], events: ['accountsChanged'] }
      }
      const { uri, approval } = await signClient.connect({ requiredNamespaces: namespaces })
      if (uri) {
        await web3Modal.openModal({ uri, standaloneChains: namespaces.eip155.chains })
        await approval()
        web3Modal.closeModal()
      }
    }
  }

  useEffect(() => {
    onInitializeSignClient()
  }, [])

  return (
     <>
     {signClient ? ( 
     <button onClick={onOpenModal}>Connect Wallet</button>
     )  : 'Initializing...'}
     </>
        )
 
}

export default Web3login