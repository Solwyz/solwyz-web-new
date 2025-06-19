import React, { useEffect, useState } from 'react';
import downloadblue from '@assets/icons/download.svg';
import downloadblueHover from '@assets/icons/downloadHover.svg';
import { useLocation, useParams } from 'react-router-dom';
import Api from '../../../Services/Api';

// 🟢 Sub-component to handle individual hover for each download icon
function HoverableDownload({ resumeUrl }) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className='flex items-center gap-1 text-[#4D78BA] cursor-pointer'
    >
      <div className='text-[#4D78BA] hover:text-[#0A1FDD] duration-300'>Download resume</div>
      <img src={hover ? downloadblueHover : downloadblue} className='w-4 h-4' alt='Download' />
    </a>
  );
}

function ApplicationsTable() {
  const [applications, setApplications] = useState([]);
  const { id, designationId } = useParams();
  const location = useLocation();
  const designationName = location.state?.designationName || {};

  useEffect(() => {
    Api.get(`api/application/all/${id}/designation/${designationId}`)
      .then(response => {
        if (response && response.status === 200) {
          console.log("Applications:", response.data.applications);
          setApplications(response.data.applications);
        } else {
          console.error("Error fetching applications:", response);
        }
      });
  }, []);

  return (
    <div>
      <div className='flex items-center justify-between border-b border-[#C1DBD8] pb-6'>
        <div>
          <div className='text-[20px] text-[#000000] font-semibold'>{designationName}</div>
          <div className='text-[16px] text-[#858585] font-medium'>
            See all job applications for {designationName}
          </div>
        </div>
      </div>

      <div className='mt-6 overflow-hidden rounded-t-lg'>
        <table className='w-full'>
          <thead className='text-[14px] bg-[#04A391] text-left text-[#FFFFFF]'>
            <tr>
              <th className='font-semibold py-3 pl-4'>Sl.no</th>
              <th className='font-semibold py-3'>Applied Date</th>
              <th className='font-semibold py-3'>Name</th>
              <th className='font-semibold py-3'>Email ID</th>
              <th className='font-semibold py-3'>Contact</th>
              <th className='font-semibold py-3'>Date of Birth</th>
              <th className='font-semibold py-3'>Qualification</th>
              <th className='font-semibold py-3'>Resume</th>
            </tr>
          </thead>
          <tbody className='text-[14px] font-medium'>
            {applications.map((application, index) => (
              <tr className='border border-[#E6E6E7]' key={index}>
                <td className='pl-4 py-4'>{index + 1}</td>
                <td className='py-4'>
                  {application.createdAt
                    ? new Date(application.createdAt).toLocaleDateString('en-GB')
                    : ''}
                </td>
                <td className='py-4'>{application.name}</td>
                <td className='py-4'>{application.email}</td>
                <td className='py-4'>{application.phoneNo}</td>
                <td className='py-4'>
                  {application.dateOfBirth
                    ? new Date(application.dateOfBirth).toLocaleDateString('en-GB')
                    : ''}
                </td>
                <td className='py-4'>{application.highestQualification}</td>
                <td className='py-4'>
                  <HoverableDownload resumeUrl={application.resumeUrl} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApplicationsTable;
