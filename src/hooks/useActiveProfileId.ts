import { useSelector } from '../store/hooks';

const useActiveProfileId = () => useSelector(state => state.activeProfile.profileId);

export default useActiveProfileId;
