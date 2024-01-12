import React, { useState, useEffect } from 'react';
import { VscCallIncoming, VscCallOutgoing } from "react-icons/vsc";
import { LuPhoneMissed, LuVoicemail } from "react-icons/lu";
import { MdOutlineCallEnd, MdArchive, MdUnarchive } from "react-icons/md";

const CallLogList = ({ selectedTab }) => {
  const [callLogs, setCallLogs] = useState([])

  const BE_URL = "https://cerulean-marlin-wig.cyclic.app/"

  useEffect(() => {
    fetch(`${BE_URL}activities`)
      .then(response => response.json())
      .then(data => {
        let filteredData = data.filter(item => item.is_archived === (selectedTab === 1))
        let sortedData = filteredData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setCallLogs(sortedData)
      })
      .catch(error => console.log('error', error));
  }, [selectedTab])

  var date = ''

  const dateChange = (newdate) => {
    if (date !== newdate) date = formatDate(newdate)
  }

  const formatDate = (myDate) => {
    return new Date(myDate).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }

  const archiveAll = () => {
    callLogs.forEach((calllog) => {
      console.log(calllog.id)
      archiveCall(calllog.id)
    })

  }

  const archiveCall = (callId) => {

    let value = (selectedTab === 0)

    var requestOptions = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "is_archived": value
      }),
    };

    fetch(`${BE_URL}activities/${callId}`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(callId + ':' + result))
      .catch(error => console.log('error', error));
  }

  return (<>
    <span className='archive-block' onClick={archiveAll}>
      {selectedTab === 0 ? <MdArchive size={30} /> : <MdUnarchive size={30} />}
      <h2 className='archive-text'>{selectedTab === 0 ? 'Archive' : "Unarchive"} All Calls</h2>
    </span>
    <div className="call-log-list">
      <ul>
        {callLogs.map((log, index) => (
          <li key={index}>
            {date !== formatDate(log.created_at) &&
              <div className="dotted-line">
                {formatDate(log.created_at)}
              </div>}
            {dateChange(log.created_at)}
            <div className="call-log-entry">

              <div className="call-log-details">
                <span>
                  {log.direction === 'inbound' && log.call_type === 'answered' && <VscCallIncoming size={20} />}
                  {log.direction === 'inbound' && log.call_type === 'missed' && <LuPhoneMissed size={20} color='red' />}
                  {log.direction === 'inbound' && log.call_type === 'voicemail' && <LuVoicemail size={20} color='red' />}
                  {(!log.direction || !log.call_type) && <MdOutlineCallEnd size={20} />}
                  {log.direction === 'outbound' && <VscCallOutgoing size={20} />}
                </span>
                <span className='call-status'>
                  <span className="caller-name">{log.via || 'Unknown Number'}</span>
                </span>
              </div>
              <div className="call-log-actions">
                <span>7:58 PM</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </>
  );
};

export default CallLogList;