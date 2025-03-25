import Technology from '../../assets/ecosystemTechnology.png'
import Activity from '../../assets/ecosystemActivity.png'
import EduDevice from '../../assets/ecosystemEdudevice.png'
import Development from '../../assets/ecosystemDevelopment.png'

export function TechnologyComponent() {
    return(
        <div >
            <img src={Technology} alt="Công nghệ thông minh" className='w-full max-h-screen object-cover'/>
        </div>
    );
}

export function DevelopmentComponent() {
    return(
        <div >
            <img src={Development} alt="Phát triển tài năng" className='w-full max-h-screen object-cover' />
        </div>
    );
}

export function EduDeviceComponent() {
    return(
        <div >
            <img src={EduDevice} alt="Thiết bị học tập thông minh" className='w-full max-h-screen object-cover'/>
        </div>
    );
}

export function ActivityComponent() {
    return(
        <div >
            <img src={Activity} alt="Hoạt động sáng tạo" className='w-full max-h-screen object-cover' />
        </div>
    );
}