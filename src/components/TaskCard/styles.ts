import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  form: {
    padding: 16,
    backgroundColor: '#333333',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 3,
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 8
  },
  formActive: {
    padding: 16,
    backgroundColor: '#262626',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 3,
    borderWidth: 1,
    borderColor: '#262626',
    marginBottom: 8
  },
  checked: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#5E60CE',
    borderRadius: 999,
  },
  unchecked: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#4EA8DE',
    borderRadius: 999,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#F2F2F2'
  },
  complete: {
    fontSize: 14,
    fontWeight: '400',
    color: '#808080',
    textDecorationLine: 'line-through'
  }
});