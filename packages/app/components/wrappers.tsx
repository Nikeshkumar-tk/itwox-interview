import { H3, ScrollView, ScrollViewProps, XGroup, XStack, XStackProps } from "@my/ui";


export const Flex = ({ children, ...xStackProps }: { children: React.ReactNode } & XStackProps) => {
    return (
        <XStack space display="flex" alignItems="center" {...xStackProps}>
            {children}
        </XStack>
    )
}
export  const DashBoardWrapper = ({
    children,
    ...props
  }: {
    children: React.ReactNode
  } & ScrollViewProps) => {
    return (
      <ScrollView px={'$10'} py={'$4'} {...props}>
        <H3>Dashboard</H3>
        <XGroup
          mt={'$4'}
          gap={'$4'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {children}
        </XGroup>
      </ScrollView>
    )
  }


