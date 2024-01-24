import { Text, Pressable, PressableProps } from "react-native"

import { styles } from "./styles"

type CategoryProps = PressableProps & {
  title: string
  isSelected?: boolean
}

export function Category({
  title,
  isSelected = false,
  ...rest
}: CategoryProps) {
  return (
    <Pressable
      style={[styles.container, isSelected && styles.selected]}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}
