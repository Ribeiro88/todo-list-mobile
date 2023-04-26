import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#0d0d0d',
    height: 173,
    padding: 24,
    zIndex: 1
    
  },
  content: {
    paddingTop: getStatusBarHeight() + RFValue(24),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 40,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 32
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    height: 56,
    borderRadius: 5,
    color: '#FFFFFF',
    padding: 16,
    marginRight: 4,
    fontSize: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
});