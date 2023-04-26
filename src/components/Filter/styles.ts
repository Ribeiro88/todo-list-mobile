import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  filter: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20
  },
  criadas: {
    color: '#4EA8DE',
    textTransform: 'capitalize',
    fontSize: 14,
    fontWeight: '700'
  },
  concluidas: {
    color: '#8284FA',
    textTransform: 'capitalize',
    fontSize: 14,
    fontWeight: '700'
  },
  counterBox: {
    backgroundColor: '#333333',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  counter: {
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: '700',
  }

})