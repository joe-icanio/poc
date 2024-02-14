import { Button } from '@mui/material'
import './assets/css/app.css'
import FullLayout from './layouts/FullLayout'
import client from './utils/axios'
import clientInstance from './utils/axios'
import { useRef, useState } from 'react'
import { downloadFile } from './utils/downloadFiles'

function App() {
  const [fileId, setFileId] = useState('')
  const inputRef = useRef()
  // const handleButtonClick = async () => {
  //   clientInstance.post('/pdf/store')
  // }

  const handleFileUpload = async e => {
    try {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('file', file)
      const res = await clientInstance.post('/pdf/store', formData)
      setFileId(res.data?.data?.pdf_filename)
    } catch (err) {
      console.error(err)
    } finally {
      inputRef.current.value = ''
    }
  }

  const handleFileDownload = async () => {
    try {
      const res = await clientInstance.get('/pdf/mask', {
        params: { file_name: fileId },
        headers: {
          responseType: 'blob',
        },
      })

      downloadFile(res.data)
    } catch (err) {
      console.error(err)
    } finally {
    }
  }

  return (
    <div>
      <FullLayout>
        <Button variant='contained'>
          <label htmlFor='raised-button-file'>
            Upload
            <input
              ref={inputRef}
              // accept='image/*'
              onChange={handleFileUpload}
              // onClick={handleFileUpload}
              style={{ display: 'none' }}
              id='raised-button-file'
              multiple
              type='file'
              hidden
            />
          </label>
        </Button>
        {fileId}
        <Button variant='contained' onClick={handleFileDownload}>
          Download
        </Button>
      </FullLayout>
    </div>
  )
}

export default App
