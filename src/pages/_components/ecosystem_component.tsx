import Technology from '../../assets/ecosystemTechnology.png'
import Activity from '../../assets/ecosystemActivity.png'
import EduDevice from '../../assets/ecosystemEdudevice.png'
import Development from '../../assets/ecosystemDevelopment.png'

export function TechnologyComponent() {
    return(
        <div>
            <img src={Technology} alt="Công nghệ thông minh" />
        </div>
    );
}

export function DevelopmentComponent() {
    return(
        <div>
            <img src={Development} alt="Phát triển tài năng" />
        </div>
    );
}

export function EduDeviceComponent() {
    return(
        <div>
            <img src={EduDevice} alt="Thiết bị học tập thông minh" />
        </div>
    );
}

export function ActivityComponent() {
    return(
        <div>
            <img src={Activity} alt="Hoạt động sáng tạo" />
        </div>
    );
}